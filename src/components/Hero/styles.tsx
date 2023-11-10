
import tw, { styled, css } from 'twin.macro'

const HeroWrapper = styled.div(() => [
    tw`relative flex flex-col h-full w-full`,
    css`
        video{
            ${tw`rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover`}
        }
        div.hero-inner{
            ${tw`flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]`}
            &--text{
                ${tw`w-full h-full flex flex-col gap-5 justify-center m-auto text-start`}
                div.Welcome-box{
                    ${tw`py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]`}
                    svg{
                        ${tw`text-[#b49bff] mr-[10px] h-5 w-5`}
                    }
                }
                div.hero-title{
                    ${tw`flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto`}
                    span.mask{
                        ${tw`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500`}
                    }
                }
                p.hero-description{
                    ${tw`text-lg text-gray-400 my-5 max-w-[600px]`}
                }
                a.button-primary{
                    ${tw`py-2 text-center text-white cursor-pointer rounded-lg max-w-[200px]`}
                }
            }
            &--image{
                ${tw`w-full h-full flex justify-center items-center`}
            }
        }
    `
])



export { HeroWrapper }