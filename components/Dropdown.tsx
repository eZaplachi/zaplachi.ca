import { GetStaticProps } from "next";
// import { getWorkspaces } from "../lib/contentfulHelper";
import styles from "../styles/components/Dropdown.module.css";

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await getWorkspaces();

//   return {
//     props: { myWorkspaces: data.workSpacesCollection.items },
//   };
// };

const Dropdown = ({ myWorkspaces }: any) => {
  return (
    <div className={styles.main}>
      {myWorkspaces.map((myWorkspace: any) => {
        <div>
          <h3>{myWorkspace.name}</h3>
        </div>;
      })}
    </div>
  );
};

export default Dropdown;
