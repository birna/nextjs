import Linha from "../components/Linha/Linha";
import Subdivisao from "../components/Subdivisao/Subdivisao";

export default function Page() {
    return (
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          padding: '0 0.5rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Linha preta />
        <Linha />
        <Linha preta />
        <Linha />
        <Linha preta />
        <Linha />
        <Linha preta />
        <Linha />
      </div>
    );
  }