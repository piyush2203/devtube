import React from "react";
import { Link } from "react-router-dom";
// import HomeTop from './HomeTop'

const Homepage = ({ sideNav, sideNavFunc }) => {
  console.log(sideNav);

  const videosidenav =()=>{
    sideNavFunc(false);
  }

  return (
    <div
      className={
        sideNav
          ? "w-[100%] md:ml-[20%] ml-[2%] h-[108%] md:h-full md:pt-[4.5%] pt-[20%] md:p-[1.5%] flex flex-col font-[poppins] items-center"
          : "w-[100%] md:ml-[5%] ml-[2%] md:h-full h-[108%]  md:p-[1.5%] flex flex-col font-[poppins] overflow-y-hidden md:pt-[4.5%] pt-[20%] "
      }
    >
      <div className="w-full h-[8%] mt-[2%] flex  items-center mb-[1%] md:block hidden">
        <h1 className="text-[160%] text-white">Recommendations For You.</h1>
      </div>
      {/* w-[30%] h-[45%] bg-black rounded-lg */}


      {/* video section */}
      <div className="w-full h-[87.5%] gap-5 flex flex-wrap  overflow-y-auto">

        {/* video1 */}
        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[45%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[45%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] md:text-[1.7vh] text-white ">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%] pt-[2%] md:pt-[2%] text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>


        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>


        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>



        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>



        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>




        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>




        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>



        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>



        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>



        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>



        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>



        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>



        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>



        <Link to={"/watch/7807"} onClick={videosidenav}
          className={
            sideNav
              ? " md:w-[32%] w-full md:h-[45%] h-[55%] bg-black rounded-lg cursor-pointer "
              : "md:w-[22%] w-full md:h-[42%] h-[55%] bg-black rounded-md cursor-pointer "
          }
        >
          <div className="w-full h-[70%]  rounded-t-lg overflow-hidden">
            <img
              src="/thumnail4.jpg"
              alt=""
              className="h-full w-full object-fit"
            />
          </div>
          
          <div className="w-full flex h-[30%] bg-[#323232] rounded-b-md">
            <div className="w-[15%] h-full ">
              <div className="h-[48%] w-[80%] mx-[13%] my-[18%] rounded-full overflow-hidden border-x border-y">
                <img
                  src="/man1.jpg"
                  alt=""
                  className="h-full h-full object-fit"
                />
              </div>
            </div>
            <div className="w-[85%] h-full ">
              <div className="w-full h-[60%]  overflow-hidden">
                <h1 className="px-[5%] pt-[2%] text-[1.7vh] text-white">
                  The Worst Proposal Ever | Stand-Up Comedy lorem30
                </h1>
              </div>
              <div className="w-full h-[40%] flex md:items-center">
                <h4 className="px-[5%]  text-[80%] text-gray-400 ">Channnel Name</h4>
              </div>
            </div>
          </div>
        </Link>










        



        {/* end */}
      </div>
    </div>
  );
};

export default Homepage;
