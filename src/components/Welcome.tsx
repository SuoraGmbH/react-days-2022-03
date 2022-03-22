interface Props {
  city?: string;
}

const Welcome = ({ city }: Props) => {
  // city is string or undefined
  if (!city) {
    return <h1>Welcome to the unknown city!</h1>;
  }

  // city is string
  return <h1>Welcome to {city.toUpperCase()}!</h1>;
};

export default Welcome;
