

interface GreetingProps {
  name: string; // defines the `name` property as a required string for the component
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>; 
};

export default Greeting;