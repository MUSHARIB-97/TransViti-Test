import { Job } from "../types/dataTypes";

export interface SearchFilters {
    keyword: string;
    location: string;
    jobType: string;
}

/**
 * Filters jobs based on search criteria
 */
export const filterJobs = (
    jobs: Job[],
    filters: SearchFilters
): Job[] => {
    return jobs.filter((job) => {
        const keywordMatch = !filters.keyword ||
            job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
            job.company.toLowerCase().includes(filters.keyword.toLowerCase());

        const locationMatch = !filters.location ||
            filters.location === "All Locations" ||
            job.location.toLowerCase().includes(filters.location.toLowerCase());

        const jobTypeMatch = !filters.jobType ||
            filters.jobType === "All Types" ||
            job.jobType.toLowerCase() === filters.jobType.toLowerCase();

        return keywordMatch && locationMatch && jobTypeMatch;
    });
};

/**
 * Extracts unique job types from jobs array
 */
export const getUniqueJobTypes = (jobs: Job[]): string[] => {
    const types = jobs.map(job => job.jobType);
    return Array.from(new Set(types));
};

/**
 * Extracts unique locations from jobs array
 */
export const getUniqueLocations = (jobs: Job[]): string[] => {
    const locations = jobs.map(job => {
        const locationParts = job.location.split(',');
        return locationParts[locationParts.length - 1].trim();
    });
    return Array.from(new Set(locations));
};

/**
 * Debounce function for search input
 */
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    delay: number
): ((...args: Parameters<T>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};