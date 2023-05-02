import "./styles/App.css";
import CodeEditor from "./components/CodeEditor";

const styles = {
  wrapper: "h-full w-full",
  toolbar: "h-[100px] w-full",
  codeWrapper: "h-full w-full flex flex-row justify-center items-center",
  divChild: "h-full w-[50%]",
};

const App = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.toolbar}>
        <select
          onChange={(e) => {
            const lang = e.target.value;
          }}
        >
          <option value="rust">Rust</option>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
        </select>
      </div> */}
      <div className={styles.codeWrapper}>
        <div className={styles.divChild}>
          <CodeEditor height="100%" language="rust" />
        </div>
        <div className={styles.divChild}>result</div>
      </div>
    </div>
  );
};

export default App;
