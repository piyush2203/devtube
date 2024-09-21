import React, { useState } from "react";
import Sidenav from "../Component/Sidenav";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import NotificationsActiveSharpIcon from "@mui/icons-material/NotificationsActiveSharp";

const Profile = ({ sideNavbar }) => {
  const [subscribe, setsubscribe] = useState(false);

  const subscribefunc = () => {
    setsubscribe(!subscribe);
  };

  return (
    <div className="h-full w-full font-[poppins] overflow-hidden">
      <Sidenav sideNavbar={sideNavbar} />

      <div
        className={
          sideNavbar
            ? "w-full h-full md:pt-[5%] pt-[20%] md:pl-[21%] pr-[1%] text-white"
            : "w-full h-full md:pt-[5%] pt-[20%] pl-[1%] pr-[1%] text-white"
        }
      >
        {/* top user */}
        <div
          className={
            sideNavbar
              ? "top h-[35%] w-full rounded-t-xl  border-gray-500 bg-[#202020] flex items-center"
              : "top h-[35%] w-full rounded-t-xl  border-gray-500 bg-[#202020] flex items-center"
          }
        >
          <div className="left  w-[30%] flex items-center justify-center relative md:ml-[10%] h-[80%] ml-[10%] ">
            <div className="image md:h-full h-[80%] md:w-[50%] w-[90%] absolute flex right-[15%] justify-center bg-transparent rounded-lg border-2 items-center overflow-hidden">
              <img
                src="/profile.png"
                alt=""
                className="object-content w-full h-full"
              />
            </div>
          </div>
          <div className="right   w-[70%] h-[80%] ">
            <h1 className="md:text-[350%] text-[150%] w-full overflow-hidden md:pt-[0%] pt-[9%] font-bold">
              Channel Name
            </h1>
            <div className="md:flex w-full text-[80%]">
              <h3 className="md:pl-[0%] pl-[2%] text-gray-300"> @channelname</h3>
              <h3 className="pl-[2%] text-gray-300">· 12-9-2390</h3>
              <h3 className="pl-[2%] text-gray-300">· 12 videos</h3>
            </div>
            <div className="subcribe w-full">
              <div className=" bg-white md:w-[19%] w-[70%] flex items-center justify-center text-[110%] p-[1%] rounded-full gap-3  mt-[4%] cursor-pointer"  onClick={subscribefunc}>
                <div>
                  <h1 className="md:pl-[4%] text-black">
                    {subscribe ? "Subscribed" : "Subscribe"}
                  </h1>
                </div>
                {subscribe ? (
                  <NotificationsActiveSharpIcon sx={{color:"black"}}/>
                ) : (
                  <NotificationsSharpIcon sx={{color:"black"}}/>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* videos bottom */}
        <div className={
            sideNavbar
              ? "top h-[62%] w-full rounded-t-xl  border-b-y border-gray-500  "
              : "top h-[59%] w-full rounded-t-xl  border-gray-500 mb-[2%] "
          }>
            <div className="title w-full bg-[1f1e1e] h-[10%] py-[1.5%] border-b-2 border-gray-500 px-[8%] flex items-center  ">
                <h1 className="md:text-[160%] text-[120%] font-bold ">VIDEOS</h1>
               
            </div>

            <div className="allvideos pl-[4%]  w-full h-[90%] flex flex-wrap overflow-auto ">
                {/* video1 */}
                <div className="video md:w-[22%] w-[45%] h-[50%] mr-[0%] ml-[2%] bg-[#202020] mt-[3%] md:mt-[1%] rounded-md overflow-hidden">
                    <div className="h-[64%] w-full  rounded-md overflow-hidden">
                        <img src="/thumnail3.png" alt="" className="object-fill w-full h-full"/>
                    </div>


                    <div className="h-[34%] w-full  flex items-center">
                        <div className="left  w-[20%] h-full  mt-[4%] pl-[4%]">
                            <div className="h-[50%] rounded-full w-[70%]  overflow-hidden">
                                <img src="/man1.jpg" alt="" className="object-fill w-full h-full"/>
                            </div>
                        </div>

                        <div className="right w-[80%] pr-[1%] pt-[1%] h-full ">
                            <div className="h-[68%] ">
                                <h1 className="text-[1.5vh]">The Worst Proposal Ever | Stand-Up Comedy</h1>
                            </div>
                            <div className="h-[30%] w-full flex gap-4 text-gray-400 text-[1.5vh]">
                                <div><h4>14 Likes</h4></div>
                                <div><h4>12-34-7890</h4></div>

                            </div>
                        </div>
                    </div>


                    
                </div>


                {/* delete  */}

                <div className="video md:w-[22%] w-[45%] h-[50%] mr-[0%] ml-[2%] bg-[#202020] mt-[3%] md:mt-[1%] rounded-md overflow-hidden">
                    <div className="h-[64%] w-full  rounded-md overflow-hidden">
                        <img src="/thumnail3.png" alt="" className="object-fill w-full h-full"/>
                    </div>


                    <div className="h-[34%] w-full  flex items-center">
                        <div className="left  w-[20%] h-full  mt-[4%] pl-[4%]">
                            <div className="h-[50%] rounded-full w-[70%]  overflow-hidden">
                                <img src="/man1.jpg" alt="" className="object-fill w-full h-full"/>
                            </div>
                        </div>

                        <div className="right w-[80%] pr-[1%] pt-[1%] h-full ">
                            <div className="h-[68%] ">
                                <h1 className="text-[1.5vh]">The Worst Proposal Ever | Stand-Up Comedy</h1>
                            </div>
                            <div className="h-[30%] w-full flex gap-4 text-gray-400 text-[1.5vh]">
                                <div><h4>14 Likes</h4></div>
                                <div><h4>12-34-7890</h4></div>

                            </div>
                        </div>
                    </div>


                    
                </div>

<div className="video md:w-[22%] w-[45%] h-[50%] mr-[0%] ml-[2%] bg-[#202020] mt-[1%] rounded- mt-[3%]mmd:d overflow-hidden">
    <div className="h-[64%] w-full  rounded-md overflow-hidden">
        <img src="/thumnail3.png" alt="" className="object-fill w-full h-full"/>
    </div>


    <div className="h-[34%] w-full  flex items-center">
        <div className="left  w-[20%] h-full  mt-[4%] pl-[4%]">
            <div className="h-[50%] rounded-full w-[70%]  overflow-hidden">
                <img src="/man1.jpg" alt="" className="object-fill w-full h-full"/>
            </div>
        </div>

        <div className="right w-[80%] pr-[1%] pt-[1%] h-full ">
            <div className="h-[68%] ">
                <h1 className="text-[1.5vh]">The Worst Proposal Ever | Stand-Up Comedy</h1>
            </div>
            <div className="h-[30%] w-full flex gap-4 text-gray-400 text-[1.5vh]">
                <div><h4>14 Likes</h4></div>
                <div><h4>12-34-7890</h4></div>

            </div>
        </div>
    </div>


    
</div>

<div className="video md:w-[22%] w-[45%] h-[50%] mr-[0%] ml-[2%] bg-[#202020] mt-[1%] rounded- mt-[3%]mmd:d overflow-hidden">
    <div className="h-[64%] w-full  rounded-md overflow-hidden">
        <img src="/thumnail3.png" alt="" className="object-fill w-full h-full"/>
    </div>


    <div className="h-[34%] w-full  flex items-center">
        <div className="left  w-[20%] h-full  mt-[4%] pl-[4%]">
            <div className="h-[50%] rounded-full w-[70%]  overflow-hidden">
                <img src="/man1.jpg" alt="" className="object-fill w-full h-full"/>
            </div>
        </div>

        <div className="right w-[80%] pr-[1%] pt-[1%] h-full ">
            <div className="h-[68%] ">
                <h1 className="text-[1.5vh]">The Worst Proposal Ever | Stand-Up Comedy</h1>
            </div>
            <div className="h-[30%] w-full flex gap-4 text-gray-400 text-[1.5vh]">
                <div><h4>14 Likes</h4></div>
                <div><h4>12-34-7890</h4></div>

            </div>
        </div>
    </div>


    
</div>

<div className="video md:w-[22%] w-[45%] h-[50%] mr-[0%] ml-[2%] bg-[#202020] mt-[1%] rounded- mt-[3%]mmd:d overflow-hidden">
    <div className="h-[64%] w-full  rounded-md overflow-hidden">
        <img src="/thumnail3.png" alt="" className="object-fill w-full h-full"/>
    </div>


    <div className="h-[34%] w-full  flex items-center">
        <div className="left  w-[20%] h-full  mt-[4%] pl-[4%]">
            <div className="h-[50%] rounded-full w-[70%]  overflow-hidden">
                <img src="/man1.jpg" alt="" className="object-fill w-full h-full"/>
            </div>
        </div>

        <div className="right w-[80%] pr-[1%] pt-[1%] h-full ">
            <div className="h-[68%] ">
                <h1 className="text-[1.5vh]">The Worst Proposal Ever | Stand-Up Comedy</h1>
            </div>
            <div className="h-[30%] w-full flex gap-4 text-gray-400 text-[1.5vh]">
                <div><h4>14 Likes</h4></div>
                <div><h4>12-34-7890</h4></div>

            </div>
        </div>
    </div>


    
</div>

<div className="video md:w-[22%] w-[45%] h-[50%] mr-[0%] ml-[2%] bg-[#202020] mt-[1%] rounded- mt-[3%]mmd:d overflow-hidden">
    <div className="h-[64%] w-full  rounded-md overflow-hidden">
        <img src="/thumnail3.png" alt="" className="object-fill w-full h-full"/>
    </div>


    <div className="h-[34%] w-full  flex items-center">
        <div className="left  w-[20%] h-full  mt-[4%] pl-[4%]">
            <div className="h-[50%] rounded-full w-[70%]  overflow-hidden">
                <img src="/man1.jpg" alt="" className="object-fill w-full h-full"/>
            </div>
        </div>

        <div className="right w-[80%] pr-[1%] pt-[1%] h-full ">
            <div className="h-[68%] ">
                <h1 className="text-[1.5vh]">The Worst Proposal Ever | Stand-Up Comedy</h1>
            </div>
            <div className="h-[30%] w-full flex gap-4 text-gray-400 text-[1.5vh]">
                <div><h4>14 Likes</h4></div>
                <div><h4>12-34-7890</h4></div>

            </div>
        </div>
    </div>


    
</div>

<div className="video md:w-[22%] w-[45%] h-[50%] mr-[0%] ml-[2%] bg-[#202020] mt-[1%] rounded- mt-[3%]mmd:d overflow-hidden">
    <div className="h-[64%] w-full  rounded-md overflow-hidden">
        <img src="/thumnail3.png" alt="" className="object-fill w-full h-full"/>
    </div>


    <div className="h-[34%] w-full  flex items-center">
        <div className="left  w-[20%] h-full  mt-[4%] pl-[4%]">
            <div className="h-[50%] rounded-full w-[70%]  overflow-hidden">
                <img src="/man1.jpg" alt="" className="object-fill w-full h-full"/>
            </div>
        </div>

        <div className="right w-[80%] pr-[1%] pt-[1%] h-full ">
            <div className="h-[68%] ">
                <h1 className="text-[1.5vh]">The Worst Proposal Ever | Stand-Up Comedy</h1>
            </div>
            <div className="h-[30%] w-full flex gap-4 text-gray-400 text-[1.5vh]">
                <div><h4>14 Likes</h4></div>
                <div><h4>12-34-7890</h4></div>

            </div>
        </div>
    </div>


    
</div>


{/* delete  */}
                
                

            </div>

          </div>

      </div>
    </div>
  );
};

export default Profile;
