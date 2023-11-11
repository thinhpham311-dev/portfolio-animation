import tw, { styled, css } from 'twin.macro'

interface props {
    open: boolean;
}

const NavbarWrapper = styled.div<props>(({ open }) => [
    tw`fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-slate-300/30 bg-[#03001417] backdrop-blur-md z-50 px-10 h-[65px] w-full`,
    css`
        .navbar{
            ${tw`w-full h-full flex flex-wrap flex-row items-center justify-between m-auto xl:px-[10px]`}
            &-logo{
                ${tw`h-auto w-auto flex flex-row items-center`}
                &--text{
                    ${tw`font-bold ml-[10px] hidden md:block text-white font-bold`}
                }
            }
            &-button{
                ${tw`h-[50px] w-[50px] rounded-full border-2 border-white xl:hidden focus:bg-transparent flex items-center justify-center`}
                svg{
                    ${tw` text-white`}
                }
            }
            &-menu{
                ${open ? tw`flex` : tw`hidden`}
                ${tw`xl:w-[500px] w-full h-full xl:flex flex-row items-center justify-between xl:mr-20 mr-0`}
                &--list{
                    ${tw`flex items-center justify-between w-full h-auto border border-[#7042f861] xl:bg-[#0300145e] bg-[#7042f861] xl:mr-[15px] mr-0 px-[20px] py-[10px] rounded-full text-gray-200`}
                    a.menu-item{
                        ${tw`cursor-pointer xl:inline-block block`}
                    }
                }
            }
            &-social{
                ${tw`xl:flex hidden flex-row gap-5`}
            }
        }
    `
])

export {
    NavbarWrapper
}