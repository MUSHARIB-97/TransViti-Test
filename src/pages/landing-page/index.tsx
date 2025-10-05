import React, { useState, useCallback, useMemo } from "react";
import MainLayout from "../../layout/MainLayout";
import { Styles } from "./Styles";
import MenuButton from "../../components/MenuButton";
import {
  cardData,
  InitialValues,
  jobTypes,
  locations,
} from "../../helper/Constant";
import CustomButton from "../../components/CustomButton";
import { SearchProps, CardSection } from "../../types/dataTypes";
import UserProfile from "../../components/user-profile-container/UserProfile";
import IMAGES from "../../assets/images";
import CustomAnchorCard from "../../components/CustomAnchorCard";
import { filterJobs, debounce } from "../../utils/searchUtils";
import JobModal from "../../components/Modal";

const LandingPage: React.FC = () => {
  const [selected, setSelected] = useState<SearchProps>(InitialValues);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filteredData, setFilteredData] = useState<CardSection[]>([
    ...cardData,
  ]);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [applyJobData, setApplyjobData] = useState<any>(null);

  const debouncedSearch = useMemo(
    () =>
      debounce((keyword: string, location: string, jobType: string) => {
        performSearch(keyword, location, jobType);
      }, 300),
    []
  );

  const performSearch = useCallback(
    (keyword: string, location: string, jobType: string) => {
      const isActive = Boolean(keyword || location || jobType);
      setIsSearchActive(isActive);

      if (!isActive) {
        setFilteredData([...cardData]);
        return;
      }

      const newFilteredData = cardData.map((section) => ({
        ...section,
        data: filterJobs(section.data, {
          keyword,
          location,
          jobType,
        }),
      }));

      setFilteredData(newFilteredData);
    },
    []
  );

  const handleSearchInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchKeyword(value);
      debouncedSearch(value, selected.locations, selected.jobTypes);
    },
    [selected.locations, selected.jobTypes, debouncedSearch]
  );

  const handleLocationChange = useCallback(
    (value: string) => {
      setSelected((prev) => ({ ...prev, locations: value }));
      debouncedSearch(searchKeyword, value, selected.jobTypes);
    },
    [searchKeyword, selected.jobTypes, debouncedSearch]
  );

  const handleJobTypeChange = useCallback(
    (value: string) => {
      setSelected((prev) => ({ ...prev, jobTypes: value }));
      debouncedSearch(searchKeyword, selected.locations, value);
    },
    [searchKeyword, selected.locations, debouncedSearch]
  );

  const handleSearch = useCallback(() => {
    performSearch(searchKeyword, selected.locations, selected.jobTypes);
  }, [searchKeyword, selected.locations, selected.jobTypes, performSearch]);

  const handleReset = useCallback(() => {
    setSelected(InitialValues);
    setSearchKeyword("");
    setFilteredData([...cardData]);
    setIsSearchActive(false);
  }, []);

  const handleSimilarTagClick = useCallback(
    (tag: string) => {
      setSearchKeyword(tag);
      performSearch(tag, selected.locations, selected.jobTypes);
    },
    [selected.locations, selected.jobTypes, performSearch]
  );

  const similarJobTags = useMemo(
    () => ["Frontend", "Backend", "Graphic designer"],
    []
  );

  const totalResults = useMemo(() => {
    return filteredData.reduce((sum, section) => sum + section.data.length, 0);
  }, [filteredData]);

  const handleModal = (value: any) => {
    console.log("first=>", value);
    setApplyjobData(value);
    setOpen(true);
  };

  return (
    <MainLayout>
      <main className={Styles.userProfileContainer}>
        <section className={Styles.userProfileSUbContainer}>
          <UserProfile />
        </section>

        {/* Main Content */}
        <section className="flex-1">
          {/* Header */}
          <header>
            <h1 className="text-2xl font-bold capitalize">
              Find Your Dream Job, <span className="text-primary">Albert</span>
            </h1>
            <p className="text-text-secondary">
              Explore the latest job openings and apply for the best
              opportunities available today!
            </p>
          </header>

          {/* Hero Search Section - FIXED */}
          <section className={Styles.heroSection} aria-label="Job search">
            <div className="w-full xl:w-auto flex-1">
              <input
                id="job-search"
                type="text"
                value={searchKeyword}
                onChange={handleSearchInputChange}
                placeholder="Job Title, Company, or Keywords"
                className="w-full px-3 h-full flex-1 py-2 border border-gray-300 rounded-md outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                aria-label="Search for jobs by title, company, or keywords"
                autoComplete="off"
              />
            </div>
            <div className={Styles.heroFilterWrapper}>
              <div className={Styles.heroMenuWrapper}>
                <MenuButton
                  title="Select Location"
                  list={[...locations]}
                  selected={selected.locations}
                  setSelected={handleLocationChange}
                  style="w-full lg:w-max"
                />
                <MenuButton
                  title="Job Type"
                  list={[...jobTypes]}
                  selected={selected.jobTypes}
                  setSelected={handleJobTypeChange}
                  style="w-full lg:w-max"
                />
              </div>
              <div className={Styles.heroButtonWrapper}>
                <CustomButton
                  title="Search"
                  rightIcon={IMAGES?.searchIcon2}
                  onClick={handleSearch}
                />
                {isSearchActive && (
                  <CustomButton
                    title="Clear"
                    onClick={handleReset}
                    isOutline
                    customStyles="ml-2"
                  />
                )}
              </div>
            </div>
          </section>

          {/* Search Results Info */}
          {isSearchActive && (
            <div className="flex items-center justify-between my-4 px-2">
              <p className="text-sm text-text-secondary">
                Found{" "}
                <span className="font-semibold text-primary">
                  {totalResults}
                </span>{" "}
                job{totalResults !== 1 ? "s" : ""}
              </p>
              <button
                onClick={handleReset}
                className="text-sm text-primary hover:underline"
                type="button"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Similar Jobs Tags */}
          <section
            className={Styles.similarJobsContainer}
            aria-label="Similar job categories"
          >
            <div className="block">
              <p className={Styles.similarJobsTitle}>Similar:</p>
            </div>
            <div className={Styles.similarJobsTagsWrapper}>
              {similarJobTags.map((tag) => (
                <CustomButton
                  key={tag}
                  title={tag}
                  isOutline
                  onClick={() => handleSimilarTagClick(tag)}
                />
              ))}
            </div>
          </section>

          {/* Job Cards Sections */}
          {filteredData.map((section) => {
            if (section.data.length === 0) return null;

            return (
              <section
                key={section.id}
                className={Styles.cardSectionContainer}
                aria-labelledby={`section-title-${section.id}`}
              >
                {/* Section Header */}
                <header className={Styles.cardSectionHeader}>
                  <h2
                    id={`section-title-${section.id}`}
                    className={Styles.cardSectionTitle}
                  >
                    {section.key}
                    {isSearchActive && (
                      <span className="text-sm font-normal text-text-secondary ml-2">
                        ({section.data.length})
                      </span>
                    )}
                  </h2>
                  <a
                    title={section.seeMore}
                    href="#"
                    className={Styles.cardSectionSeeMore}
                    aria-label={`View all ${section.key.toLowerCase()}`}
                  >
                    {section.seeMore}
                  </a>
                </header>

                {/* Job Cards Grid */}
                <div className={Styles.cardGridWrapper}>
                  {section.data.map((job) => (
                    <CustomAnchorCard
                      key={`${section.id}-${job.id}`}
                      title={job.title}
                      company={job.company}
                      location={job.location}
                      datePosted={job.datePosted}
                      applicants={job.applicants}
                      isSaved={job.isSaved || false}
                      jobType={job.jobType}
                      onClick={() => handleModal(job)}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          {/* No Results Message */}
          {isSearchActive && totalResults === 0 && (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-black mb-2">
                No jobs found
              </h3>
              <p className="text-text-secondary text-center mb-4">
                We couldn't find any jobs matching your criteria.
                <br />
                Try adjusting your filters or search keywords.
              </p>
              <CustomButton title="Clear Filters" onClick={handleReset} />
            </div>
          )}
        </section>
      </main>
      <JobModal
        isOpen={open}
        onClose={() => setOpen(false)}
        job={applyJobData}
      />
    </MainLayout>
  );
};

export default LandingPage;
