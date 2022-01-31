import styles from "../styles/components/Tree.module.css";

const Tree = (props: {header?: string, }) => {
  return (
    <section>
      <h1>Tree</h1>
    <ul>
        <li>Int</li>
        <li>test</li>
        <ul>
            <li>wow</li>
            <li>omg</li>
            <ul>
                <li>shiba</li>
            </ul>
        </ul>
    </ul>
    </section>
  );
};

export default Tree;
