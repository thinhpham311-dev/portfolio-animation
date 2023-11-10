import tw, { styled, css } from 'twin.macro'

const SkillsWrapper = styled.section(() => [
    tw`flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20`,
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
                ${tw`text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]`}
            } 
            &--mask{
                ${tw`  text-[20px] text-gray-200 mb-10 mt-[10px] text-center`}
            }
        }
        div.skill-list {
            ${tw` flex flex-row justify-around flex-wrap mt-4 gap-5 items-center`}
        }
        div.skill-bg{
            ${tw` w-full h-full absolute`}
            &--video{
                ${tw`w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover`}
                video{
                    ${tw`w-full h-auto`}
                }
            }
        }
    `
])

export { SkillsWrapper }