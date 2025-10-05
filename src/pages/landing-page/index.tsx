import React, { useState } from "react";
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
import { SearchProps } from "../../types/dataTypes";
import UserProfile from "../../components/user-profile-container/UserProfile";
import IMAGES from "../../assets/images";
import CustomAnchorCard from "../../components/CustomAnchorCard";

const LandingPage: React.FC = () => {
  const [selected, setSelected] = useState<SearchProps>(InitialValues);
  return (
    <MainLayout>
      <main className={Styles.userProfileContainer}>
        <section className={Styles.userProfileSUbContainer}>
          <UserProfile />
        </section>

        {/* main content */}
        <section className="flex-1">
          <div className="">
            <h3 className="text-2xl font-bold capitalize">
              Find Your Dream Job, <span className="text-primary">Albert</span>
            </h3>
            <p className="text-text-secondary">
              Explore the latest job openings and apply for the best
              opportunities available today!
            </p>
          </div>

          {/* hero */}
          <div className={Styles.heroSection}>
            <div className="w-full xl:w-auto">
              <p className={Styles.heroTitle}>
                Job Title, Company, or Keywords
              </p>
            </div>
            <div className={Styles.heroFilterWrapper}>
              <div className={Styles.heroMenuWrapper}>
                <MenuButton
                  title="Select Location"
                  list={locations}
                  selected={selected.locations}
                  setSelected={(value: string) =>
                    setSelected((prev) => ({ ...prev, locations: value }))
                  }
                  style="w-full lg:w-max"
                />
                <MenuButton
                  title="Job Type"
                  list={jobTypes}
                  selected={selected.jobTypes}
                  setSelected={(value: string) =>
                    setSelected((prev) => ({ ...prev, jobTypes: value }))
                  }
                  style="w-full lg:w-max"
                />
              </div>
              <div className={Styles.heroButtonWrapper}>
                <CustomButton
                  title="Search"
                  rightIcon={IMAGES?.searchIcon2}
                  onClick={() => setSelected(InitialValues)}
                />
              </div>
            </div>
          </div>

          {/* similar jobs */}
          <div className={Styles.similarJobsContainer}>
            <div className="block">
              <p className={Styles.similarJobsTitle}>Similar:</p>
            </div>
            <div className={Styles.similarJobsTagsWrapper}>
              <CustomButton title="Frontend" isOutline />
              <CustomButton title="Backend" isOutline />
              <CustomButton title="Graphic designer" isOutline />
            </div>
          </div>
          {/* cards */}
          {cardData.map((section) => (
            <div key={section.id} className={Styles.cardSectionContainer}>
              {/* Card header */}
              <div className={Styles.cardSectionHeader}>
                <h2 className={Styles.cardSectionTitle}>{section.key}</h2>
                <a
                  title={section.seeMore}
                  href="#"
                  className={Styles.cardSectionSeeMore}
                >
                  {section.seeMore}
                </a>
              </div>

              {/* Card grid */}
              <div className={Styles.cardGridWrapper}>
                {section.data.map((job) => (
                  <CustomAnchorCard
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    datePosted={job.datePosted}
                    applicants={job.applicants}
                    isSaved={job.isSaved || false}
                    jobType={job.jobType}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </MainLayout>
  );
};

export default LandingPage;
