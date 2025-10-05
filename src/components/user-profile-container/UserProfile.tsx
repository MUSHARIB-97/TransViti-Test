import React from "react";
import { Styles } from "./UserProfileStyle";
import IMAGES from "../../assets/images";

const UserProfile: React.FC = () => {
  const stats = [
    { label: "Profile Visitors", count: 140 },
    { label: "Resume Viewers", count: 20 },
    { label: "My Jobs", count: 88 },
  ];

  return (
    <section className={Styles.container}>
      {/* Profile Card */}
      <article className={Styles.profileCard}>
        <figure className={Styles.coverImage}>
          <img src={IMAGES.cover} alt="User cover" />
        </figure>

        <figure className={Styles.profileImage}>
          <img src={IMAGES.profile} alt="User profile" />
        </figure>

        {/* <header className={Styles.userDetails}>
          <h2 className={Styles.userName}>Albert Flores</h2>
          <p className={`${Styles.userTitle} whitespace-pre-wrap`}>
            Senior Product Designer | UI/UX | Graphic Designer | Web Developer
          </p>
          <address
            className={Styles.userLocation}
            title="Clinton, Maryland"
            aria-label="User location"
          >
            Clinton, Maryland
          </address>
        </header> */}
        <header className={Styles.userInfo}>
          <h2 className={Styles.userName}>Albert Flores</h2>
          <p className={Styles.userDesc}>
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web
            Developer
          </p>
          <address
            className={Styles.userLocation}
            title="Clinton, Maryland"
            aria-label="User location"
          >
            Clinton, Maryland
          </address>
        </header>
      </article>

      {/* Stats Section */}
      <section className={Styles.statsCard} aria-label="Profile statistics">
        {stats.map(({ label, count }, i) => (
          <p key={i}>
            <span>{label}</span>
            <span className="count">{count}</span>
          </p>
        ))}
      </section>

      {/* Calendar Section */}
      <section className={Styles.calendarCard} aria-label="User calendar">
        <div className={Styles.calendarHeader}>
          <h3 className={Styles.calendarTitle}>My Calendar</h3>
          <p className={Styles.calendarSubtitle}>Upcoming Interview</p>
        </div>
        <button className={Styles.calendarButton} aria-label="Open calendar">
          <img
            src={IMAGES.arrowdown}
            alt="Expand calendar"
            className={Styles.calendarIcon}
          />
        </button>
      </section>
    </section>
  );
};

export default UserProfile;
