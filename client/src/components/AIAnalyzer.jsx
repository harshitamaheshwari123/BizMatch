import { useState } from "react";
import axios from "axios";

export default function AIAnalyzer() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) return alert("Please upload a file first!");
    setLoading(true);

    const formData = new FormData();
    formData.append("document", file);

    try {
      const { data } = await axios.post("/api/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(data.summary);
    } catch (error) {
      console.error(error);
      alert("Error analyzing file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "#9b59ff",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <h2>📄 AI Financial Document Analyzer</h2>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleAnalyze}
        style={{
          backgroundColor: "#9b59ff",
          color: "black",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          marginTop: "0.5rem",
          transition: "0.3s",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "cyan";
          e.target.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#9b59ff";
          e.target.style.color = "black";
        }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {result && (
        <div
          style={{
            marginTop: "1rem",
            background: "#111",
            padding: "1rem",
            borderRadius: "6px",
          }}
        >
          <h3>Summary:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
