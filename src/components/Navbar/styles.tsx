import tw, { styled, css } from 'twin.macro'

const NavbarWrapper = styled.div(() => [
    tw`fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-slate-300/30 bg-[#03001417] backdrop-blur-md z-50 px-10 h-[65px] w-full`,
    css`
        div.navbar{
            ${tw`w-full h-full flex flex-row items-center justify-between m-auto px-[10px]`}
                a.navbar-logo{
                    ${tw`h-auto w-auto flex flex-row items-center`}
                &--text{
                    ${tw`font-bold ml-[10px] hidden md:block text-gray-300`}
                }
            }
            &-menu{
                ${tw`w-[500px] h-full flex flex-row items-center justify-between md:mr-20`}
                &--list{
                    ${tw`flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200`}
                    a.menu-item{
                        ${tw`cursor-pointer`}
                    }
                }
            }
            &-social{
                ${tw`flex flex-row gap-5`}
            }
        }
    `
])

export {
    NavbarWrapper
}