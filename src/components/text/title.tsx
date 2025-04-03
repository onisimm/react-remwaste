import './text.css';

function Title({ children }: { children: React.ReactNode }) {
  return <text className="title">{children}</text>;
}

export default Title;
