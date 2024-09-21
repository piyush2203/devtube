import React, { useState } from "react";
import Sidenav from "../Component/Sidenav";
import ReactPlayer from "react-player";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import NotificationsActiveSharpIcon from "@mui/icons-material/NotificationsActiveSharp";
import { Link } from "react-router-dom";

const Video = ({ sideNavbar }) => {

    const [subscribe, setsubscribe] = useState(false);
    
    
    
    const subscribefunc=()=>{
      setsubscribe(!subscribe);
    }

    const [message, setmessage] = useState("");
    console.log(message);

  return (
    <div className="w-full h-screen md:flex relative md:pt-[0%] overflow-y-auto  font-[poppins]">
      <Sidenav sideNavbar={sideNavbar} />

      {/* left */}
      <div className="left md:w-[70%] w-full h-[200vh] border-r-2 flex flex-col md:pt-[4.5%] pt-[15%] items-center overflow-y-auto">
        <div className="video  w-[95%] md:h-[70vh] h-[25%]  flex justify-center items-center rounded-xl mt-[1.5%] overflow-hidden ">
          {/* <video  width="80%" height="100%" controls autoPlay >
                    <source src="https://lazarev.kiev.ua/la24/la-reel--min.mp4" type="video/mp4" />
                    <source src="https://lazarev.kiev.ua/la24/la-reel--min.mp4" type="video/webm" />
                    Your browser does not support the video tag.

                </video> */}
          <ReactPlayer
            url="https://youtu.be/ORfwh-EBKVw?si=yBA8Mlm1vkd42m6z"
            height="100%"
            width="100%"
            controls
            light={false}
            playing={true}
            style={{ borderRadius: "15px" }}
          />
        </div>

        <div className="w-full  mt-[1%] px-[5%] ">
          <div className="text-white w-full ">
            <h1 className="md:text-[130%] text-[110%]  md:mb-[1%] mb-[3%]">
              The Worst Proposal Ever | Stand-Up Comedy The Worst Proposal Ever
              | Stand-Up Comedy The Worst Proposal Ever
            </h1>
          </div>

          <div className="h-[7vh] md:flex w-full ">
            {/* channel name */}
            <Link to={"/user/567"} className="left md:w-[40%] w-[100%] h-full   flex items-center gap-2 md:mb-0 mb-[3%]">
              <div className="image w-[15%] h-[70%] rounded-full  overflow-hidden m-[2%]  ">
                <img
                  src="/man4.jpg"
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>

              <div className="">
                <h1 className="text-[120%] text-white "> Channel Name </h1>
              </div>
            </Link>

            {/* action */}
            <div className="right md:w-[70%] w-[100%] h-full ">
              <div className="w-full h-[100%] flex items-center relative md:gap-0 gap-1 ">
                {/* like */}
                <div className="like md:absolute cursor-pointer select-none right-[50%] md:w-[22%] justify-between w-[35%] h-[70%] bg-gray-200 p-[0.4rem] flex gap-2 items-center rounded-full ">
                  <div className="w-[50%] h-full flex gap-1 items-center  border-r-2">
                    <ThumbUpAltSharpIcon />
                    <div>
                      <h1 className="md:text-[1.1vw] text-[75%]">634</h1>
                    </div>
                  </div>

                  <div className="w-[30%] h-full flex gap-2 items-center  ">
                    <ThumbDownAltSharpIcon />
                  </div>
                </div>

                {/* share */}

                <div className="like md:absolute cursor-pointer select-none right-[30%] md:w-[18%] w-[25%] h-[70%] bg-gray-200 p-[0.4rem] flex gap-1 justify-center items-center rounded-full">
                  <div>
                    <h1 className="md:text-[1.1vw] text-[75%]">Share</h1>
                  </div>
                  <ReplySharpIcon />
                </div>

                {/* subscribe */}

                <div className="like absolute cursor-pointer select-none right-[1%] md:w-[25%] w-[35%] h-[70%] bg-gray-200 p-[0.4rem] flex gap-2 justify-center items-center rounded-full" onClick={subscribefunc}>
                  <div >
                    <h1 className="md:text-[1.1vw] text-[75%]">{subscribe? "Subscribed":"Subscribe"}</h1>
                  </div>
                  {subscribe? <NotificationsActiveSharpIcon/> : <NotificationsSharpIcon/>}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[30vh] mt-[18%] md:mt-[2%] px-[3%]'>
                <div className='w-full h-full bg-[#272727] border-x border-y border-gray-400 rounded-xl'>
                    <div className='w-full h-[17%] '>
                    <h1 className='text-[] md:text-[1.2vw] text-[90%] pt-[1%] pl-[2%] font-bold text-gray-300'>Description</h1>
                    </div>

                    <div className='w-full h-[81%] overflow-y-auto '>
                         <p className='text-gray-400 md:text-[0.9vw] text-[70%] pl-[2%] overflow-y-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores possimus, eius iste odio doloribus velit, sed quia itaque voluptatum laudantium tempore quisquam mollitia ullam. Fugit inventore laudantium alias eos dignissimos perspiciatis. Quaerat nostrum obcaecati nobis facilis consequuntur. Culpa quae accusantium voluptas reiciendis ipsum, adipisci natus sunt excepturi aperiam amet est vero cumque pariatur minima illo veritatis unde fugiat eaque qui consectetur fuga ut! Doloremque mollitia, et, modi officia impedit voluptatum labore ratione exercitationem dolore molestiae tenetur nam iure ad est, iste optio ipsam ex natus! Nesciunt aperiam unde illo, id, optio autem quibusdam assumenda possimus itaque sed corrupti pariatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio deserunt ratione fuga ipsum autem laudantium consectetur accusamus rerum, aut earum laborum nisi aliquid, repellendus iure provident praesentium corporis totam non dolore a porro ipsam! Perspiciatis animi tempore minus nemo corrupti possimus asperiores hic! Dolores labore quas perferendis et maxime facilis.


                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint veritatis deleniti quas. Ipsam ipsum excepturi, assumenda incidunt corrupti beatae recusandae. Accusantium ipsa quisquam deleniti dicta. Alias autem aut quo illum deserunt rem temporibus sequi et eligendi dolor vel porro, inventore ipsam tenetur. Quae neque consectetur quas aliquam voluptas voluptatibus, temporibus a vero perspiciatis et corrupti placeat, dolorem ullam fugit. Eveniet cumque, modi ratione, est neque at architecto dolorum, alias repellat quia suscipit. Facilis, reiciendis! Nemo et culpa debitis nesciunt aspernatur saepe tempora rem aliquid suscipit quasi modi fugit explicabo natus harum eaque doloremque libero deleniti dolore blanditiis, labore vitae.
                         </p>
                    </div>
                </div>

                   
                <div>
                    
                </div>
            </div>

        

        {/* comments */}
        <div className=" w-full h-[60vh]  mt-[4%] px-[3%]">
            <div className="w-full h-full bg-[##272727] ">
                <div className="h-[25%] w-full ">
                    <h1 className="text-[120%] text-white font-medium pt-[1%] pl-[3%]">678 Comments</h1>

                    <div className="w-full h-[80%]    px-[2%]">
                     
                        <form action="" method="" className="h-full w-full flex items-center">
                        <input type="text"  value={message} onChange={(e)=>{setmessage(e.target.value)}} placeholder="Add Your Comment" className="md:w-[82%] w-[70%] md:h-[80%] h-[70%] border border-white rounded-xl bg-[#151517] outline-none placeholder:text-white text-white px-[3%]"/>
                        <button className="md:w-[15%] w-[27%] ml-[3%] border border-white h-[40%] md:h-[50%] bg-gray-300 rounded-full hover:bg-gray-200"> Comment</button>
                        </form>
                        
                    </div>
                </div>
                {/* public comments */}
                <div className=" w-full md:h-[42vh] h-[50vh] px-[1%]">
                    <div className="w-full h-full  overflow-auto bg-[#202020] mt-[2%] flex flex-col p-[1%]  rounded-xl">
                        {/* comments */}
                        <div className=" w-full px-[2%] py-[1%] mb-[1%] ">
                            <h1 className="font-bold text-gray-300">@Channel Name</h1>
                            <p className="pl-[4%] pt-[1%] text-gray-400 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum quisquam non sit tempore. Eius laudantium dicta autem, alias nesciunt ipsam quam velit fugit deleniti enim ut, minima provident impedit.</p>
                            
                            
                        </div>

                        <div className=" w-full px-[2%] py-[1%] mb-[1%] ">
                            <h1 className="font-bold text-gray-300">@Channel Name</h1>
                            <p className="pl-[4%] pt-[1%] text-gray-400 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum quisquam non sit tempore. Eius laudantium dicta autem, alias nesciunt ipsam quam velit fugit deleniti enim ut, minima provident impedit.</p>
                            
                            
                        </div>

                        <div className=" w-full px-[2%] py-[1%] mb-[1%] ">
                            <h1 className="font-bold text-gray-300">@Channel Name</h1>
                            <p className="pl-[4%] pt-[1%] text-gray-400 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum quisquam non sit tempore. Eius laudantium dicta autem, alias nesciunt ipsam quam velit fugit deleniti enim ut, minima provident impedit.</p>
                            
                            
                        </div>


                        <div className=" w-full px-[2%] py-[1%] mb-[1%] ">
                            <h1 className="font-bold text-gray-300">@Channel Name</h1>
                            <p className="pl-[4%] pt-[1%] text-gray-400 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum quisquam non sit tempore. Eius laudantium dicta autem, alias nesciunt ipsam quam velit fugit deleniti enim ut, minima provident impedit.</p>
                            
                            
                        </div>


                        <div className=" w-full px-[2%] py-[1%] mb-[1%] ">
                            <h1 className="font-bold text-gray-300">@Channel Name</h1>
                            <p className="pl-[4%] pt-[1%] text-gray-400 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum quisquam non sit tempore. Eius laudantium dicta autem, alias nesciunt ipsam quam velit fugit deleniti enim ut, minima provident impedit.</p>
                            
                            
                        </div>

                        

                    </div>
                </div>


            </div>
        </div>
        


        {/* left end */}
      </div>

      {/* right */}

      <div className="right md:w-[30%] w-[100%] md:h-[200vh] h-[100vh]  md:pt-[4.5%]  md:block ">
        <div className="w-[100%] h-[10vh]  p-[3%]">
            <h1 className="text-[180%]  text-white">You May Like !</h1>
        </div>

        <div className="w-full md:h-[190vh] h-[100vh] overflow-auto">

            {/* recommendations */}
            <div className="w-full h-[13vh]  py-[2%] px-[2%] flex items-center mb-[1vh]">
                <div className="left w-[35%] h-full   rounded-lg overflow-hidden">
                    <img src="/thumnail3.png" alt="fr3f" className="w-full h-full object-contain"/>
                </div>
                <div className="right w-[65%] h-full  px-[2%] ">
                    <div className="w-full h-[67%]  flex items-center"> 
                            <h1 className="text-white">The Worst Proposal Ever | Stand-Up Comedy</h1>
                    </div>
                    <div className="w-full h-[30%]  flex  px-[2%]">
                        <h2 className="font-bold text-gray-400">23 Likes</h2>
                    </div>
                    
                </div>
            </div>



            <div className="w-full h-[13vh]  py-[2%] px-[2%] flex items-center mb-[1vh]">
                <div className="left w-[35%] h-full   rounded-lg overflow-hidden">
                    <img src="/thumnail1.png" alt="fr3f" className="w-full h-full object-contain"/>
                </div>
                <div className="right w-[65%] h-full  px-[2%] ">
                    <div className="w-full h-[67%]  flex items-center"> 
                            <h1 className="text-white">The Worst Proposal Ever | Stand-Up Comedy</h1>
                    </div>
                    <div className="w-full h-[30%]  flex  px-[2%]">
                        <h2 className="font-bold text-gray-400">23 Likes</h2>
                    </div>
                    
                </div>
            </div>


            <div className="w-full h-[13vh]  py-[2%] px-[2%] flex items-center mb-[1vh]">
                <div className="left w-[35%] h-full   rounded-lg overflow-hidden">
                    <img src="/thumnail2.png" alt="fr3f" className="w-full h-full object-contain"/>
                </div>
                <div className="right w-[65%] h-full  px-[2%] ">
                    <div className="w-full h-[67%]  flex items-center"> 
                            <h1 className="text-white">The Worst Proposal Ever | Stand-Up Comedy</h1>
                    </div>
                    <div className="w-full h-[30%]  flex  px-[2%]">
                        <h2 className="font-bold text-gray-400">23 Likes</h2>
                    </div>
                    
                </div>
            </div>


            <div className="w-full h-[13vh]  py-[2%] px-[2%] flex items-center mb-[1vh]">
                <div className="left w-[35%] h-full   rounded-lg overflow-hidden">
                    <img src="/thumnail4.jpg" alt="fr3f" className="w-full h-full object-contain"/>
                </div>
                <div className="right w-[65%] h-full  px-[2%] ">
                    <div className="w-full h-[67%]  flex items-center"> 
                            <h1 className="text-white">The Worst Proposal Ever | Stand-Up Comedy</h1>
                    </div>
                    <div className="w-full h-[30%]  flex  px-[2%]">
                        <h2 className="font-bold text-gray-400">23 Likes</h2>
                    </div>
                    
                </div>
            </div>

            <div className="w-full h-[13vh]  py-[2%] px-[2%] flex items-center mb-[1vh]">
                <div className="left w-[35%] h-full   rounded-lg overflow-hidden">
                    <img src="/thumnail1.png" alt="fr3f" className="w-full h-full object-contain"/>
                </div>
                <div className="right w-[65%] h-full  px-[2%] ">
                    <div className="w-full h-[67%]  flex items-center"> 
                            <h1 className="text-white">The Worst Proposal Ever | Stand-Up Comedy</h1>
                    </div>
                    <div className="w-full h-[30%]  flex  px-[2%]">
                        <h2 className="font-bold text-gray-400">23 Likes</h2>
                    </div>
                    
                </div>
            </div>

        </div>


            

      </div>
    </div>
  );
};

export default Video;
