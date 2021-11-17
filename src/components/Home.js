import useAuth from "../hooks/useAuth";

import Hospitals from "./Hospitals";
import Services from "./Services";
import Covid from "./Covid";
import TopBanner from "./TopBanner";

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <TopBanner></TopBanner>
            <Covid></Covid>
            <Services></Services>
            <Hospitals></Hospitals>
        </div>
    )
}
export default Home;