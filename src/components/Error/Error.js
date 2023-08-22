import "./Error.css"

const Error = ({ error }) => {
  return (
    <div className="Error">
     <span className="blink">There was an error: {error}!!
     <br />
      Please refresh the page or contact support.
     </span> 
      
    </div>
  );
};

export default Error;
