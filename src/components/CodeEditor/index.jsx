import MonacoEditor from "@monaco-editor/react";
import React, { useRef } from "react";
import rustAnalyserEngine from "./engines/rustAnalyser";
import example_code from "!!raw-loader!./engines/rustAnalyser/example-code.rs";

const styles = {
  wrapper: "h-full w-full",
};
export default function CodeEditor({
  language = "javascript",
  height = "500px",
}) {
  const editorRef = useRef();


  const handleOnMount = (editor, monaco) => {
    console.log("editor", { editor, monaco });
    editorRef.current = monaco;
    console.log("editorRef.current", editorRef.current);
    runCompilerEngine(language);
  };

  async function runCompilerEngine(language) {
    console.log("runCompilerEngine", editorRef.current);
    if (editorRef.current) {
      // Initialize the WebAssembly module.

      switch (language) {
        case "rust":
          console.log("startRustAnalyserEngine", editorRef.current);
          rustAnalyserEngine.startRustAnalyserEngine(editorRef.current);
          break;
        default:
          break;
      }
    }
  }
  console.log("example_code", example_code);
  return (
    <div className={styles.wrapper}>
      <MonacoEditor
        value={example_code}
        height={height}
        theme="vs-dark"
        language={language}
        onMount={handleOnMount}
        options={{
          wordWrap: "on",
          minimap: {
            enabled: false,
          },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          // tabCompletion: "on",
        }}
      />
    </div>
  );
}
