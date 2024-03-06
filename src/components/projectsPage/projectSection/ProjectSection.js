import styles from "./ProjectSection.module.css";
import { BsDashLg } from "react-icons/bs";
const ProjectSection = () => {
  return (
    <div>
      <div className={styles["section-background-container"]}>
        <div className={styles["project-section-container"]}>
          <div className={styles["project-text-container"]}>
            <div className={styles["project-header-container"]}>
              <BsDashLg className={styles["dash-icon"]} />
              <h2 className={styles["header-title"]}>Social Project</h2>
            </div>
            <h3 className={styles["header-subtitle"]}>
              Brushes Across Borders: <span>Connecting Global Kids</span>
            </h3>
            <div>
              <div className={styles["project-text"]}>
                <p>
                  The project originated in Kenya in 2018 as an artistic
                  dialogue, fostering cross-cultural understanding. It began by
                  engaging 40 children from an orphanage in the Kayole region.
                  Through facilitated discussions, the children explored the
                  diverse realities of children around the world. Each child
                  shared their own story, aspirations for a more equitable
                  future, and translated these themes into their artwork.
                </p>
                <p>
                  In 2019, the project extended its reach to an environmental
                  research institute in the Amazon Forest region of Brazil.
                  There, it engaged 30 Brazilian students in a dialogue about
                  the future. The students shared their perspectives, dreams,
                  and emphasized the importance of preserving the forest for a
                  sustainable world.
                </p>
                <p>
                  The third stage of Brushes Across Borders took place in
                  England, engaging over 60 children from southwest London.
                  These children were invited to create artwork inspired by
                  their personal dreams. Additionally, they were prompted to
                  consider their visions for the future and how these
                  aspirations could contribute to a more positive world for all.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["project-image-container"]}></div>
      </div>
    </div>
  );
};

export default ProjectSection;
