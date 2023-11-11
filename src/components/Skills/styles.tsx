import tw, { styled, css } from 'twin.macro'

const SkillsWrapper = styled.section(() => [
    tw`flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden xl:pb-80 pb-60 py-20`,
    css`
        div.skill-title{
            ${tw`w-full h-auto flex flex-col items-center justify-center`}
            div.Welcome-box{
                ${tw`py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]`}
                h1.Welcome-text{
                    ${tw`text-[13px]`}
                }
            }
            &--sub{
                ${tw`xl:text-[30px] text-[26px]  text-white font-medium mt-[10px] text-center mb-[15px]`}
            } 
            &--mask{
                ${tw`  xl:text-[20px] text-[18px] text-gray-200 xl:mb-10 mt-[10px] text-center`}
            }
        }
        div.skill-list {
            ${tw` flex flex-row justify-around flex-wrap mt-4 xl:gap-5 gap-3 items-center xl:px-0 px-10`}
            img{
                ${tw`xl:h-[80px] xl:w-[80px] lg:h-[60px] lg:w-[60px] md:h-[40px] md:w-[40px] h-[40px] w-[40px] `}
            }
        }
        div.skill-bg{
            ${tw` w-full xl:h-full lg:h-full md:h-full h-1/4 bottom-0 absolute`}
            &--video{
                ${tw`w-full h-full z-[-10] xl:opacity-30 lg:opacity-30 md:opacity-30 opacity-100 absolute flex items-center justify-center bg-cover`}
                video{
                    ${tw`w-full h-auto`}
                }
            }
        }
    `
])

export { SkillsWrapper }