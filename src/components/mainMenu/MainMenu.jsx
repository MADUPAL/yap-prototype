import React from "react";
import styles from "./mainMenu.module.css";
const MainMenu = () => {
  return (
    <div className={styles.container} style={{'color': 'white'}}>
      <div className={styles.main_grid}>
        <div className={styles.box}>
          <div className={styles.flexbox}>
            <div>
              <h2 className={styles.intro}>
                Optimize the achievement of your goals with the AI-driven
                digital planner
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.flexbox}>
            <img className={styles.arrow_image} src="/src/images/arrow.png" />

            <div>
              <img
                className={styles.note_image}
                src="/src/images/note.png"
                alt="searchImage"
              />
            </div>
            <div className={styles.textbox}>
              <p className={styles.boxname}>Notes</p>
              <div className={styles.boxdesc}>
                Use digital notebook to systimaze your thoughts of the day
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.nested_grid}>
            <div className={styles.nested_box}>
              <div className={styles.nested_flexbox}>
                <img
                  className={styles.arrow_image}
                  src="/src/images/arrow.png"
                />

                <div>
                  <img
                    className={styles.plan_image}
                    src="/src/images/plan.png"
                    alt="searchImage"
                  />
                </div>
                <div className={styles.nested_textbox}>
                  <p className={styles.nested_boxname}>Plans</p>
                  <p className={styles.nested_boxdesc}>
                    Use digital notebook to systimaze your thoughts of the day
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.nested_box}>
              <div className={styles.nested_flexbox}>
                <img
                  className={styles.arrow_image}
                  src="/src/images/arrow.png"
                />
                <div>
                  <img
                    className={styles.image}
                    src="/src/images/search.png"
                    alt="searchImage"
                  />
                </div>
                <div className={styles.nested_textbox}>
                  <p className={styles.nested_boxname}>Blackboard</p>
                  <p className={styles.nested_boxdesc}>
                    Use digital notebook to systimaze your thoughts of the day
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.nested_box}>
              <div className={styles.nested_flexbox}>
                <img
                  className={styles.arrow_image}
                  src="/src/images/arrow.png"
                />
                <div>
                  <img
                    className={styles.image}
                    src="/src/images/search.png"
                    alt="searchImage"
                  />
                </div>
                <div className={styles.nested_textbox}>
                  <p className={styles.nested_boxname}>Feed</p>
                  <p className={styles.nested_boxdesc}>
                    Use digital notebook to systimaze your thoughts of the day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.flexbox}>
            <img className={styles.arrow_image} src="/src/images/arrow.png" />

            <div>
              {/* <img
                className={styles.schedule_image}
                src="/src/images/schedule.png"
                alt="searchImage"
              /> */}
            </div>
            <div className={styles.textbox}>
              <p className={styles.boxname}>Schedule</p>
              <div className={styles.boxdesc}>
                Use digital notebook to systimaze your thoughts of the day
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.flexbox}>
            <img className={styles.arrow_image} src="/src/images/arrow.png" />

            <div>
              {/* <img
                className={styles.search_image}
                src="/src/images/search.png"
                alt="searchImage"
              /> */}
            </div>
            <div className={styles.textbox}>
              <p className={styles.boxname}>Search</p>
              <div className={styles.boxdesc}>
                Use digital notebook to systimaze your thoughts of the day
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
