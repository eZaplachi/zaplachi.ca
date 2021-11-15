import styles from "../../styles/projects/Projects.module.css";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

const Projects = () => {
  return (
    <main>
      <Layout footerText='wow'>
        <body className={styles.container}>
          <div id={styles.aside1} />
          <div id={styles.card1}>
            <Card
              title='This website'
              cardLink='website'
              content=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.card2}>
            <Card
              title='fake project'
              cardLink=''
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.card3}>
            <Card
              title='another fake project'
              cardLink=''
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.card4}>
            <Card
              title='yet another'
              cardLink=''
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.card5}>
            <Card
              title='title'
              cardLink=''
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.card6}>
            <Card
              title='title'
              cardLink=''
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore minima optio aperiam non? Temporibus facere pariatur laudantium qui tenetur.'
            />
          </div>
          <div id={styles.aside2} />
        </body>
      </Layout>
    </main>
  );
};

export default Projects;
