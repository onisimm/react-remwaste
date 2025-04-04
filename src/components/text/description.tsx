import './text.css';

function Description({ children }: { children: React.ReactNode }) {
  return <div className="description">{children}</div>;
}

export default Description;
