import { Link } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";

const NoQuoteFound = () => {
    return (
        <div className={classes.noquotes}>
            <p>No Quotes Found</p>
            <Link className="btn" to="/new-quote">
                Add A Quote
            </Link>
        </div>
    )
};

export default NoQuoteFound;