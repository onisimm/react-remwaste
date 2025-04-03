import './text.css';

function Description({ children }: { children: React.ReactNode }) {
  return <text className="description">{children}</text>;
}

export default Description;
