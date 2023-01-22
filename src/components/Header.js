
import video from "../Skys.mp4"


function Header() {
  return (
    <div>
    <header>
      <video src={video} loop autoPlay muted></video> 


      <h1>SAHARA company</h1>
    

      <div className="headerbg"></div>
    </header>
    </div>
  );
}
export default Header;
