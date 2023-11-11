import tw, { styled, css } from 'twin.macro'

const EncryptionWrapper = styled.section(() => [
    tw`flex flex-row relative items-center justify-center xl:min-h-screen lg:min-h-screen md:min-h-[80vh] min-h-[70vh] w-full h-full`,
    css`
        div.encryption-title{
            ${tw` absolute w-auto h-auto top-0 z-[5]`}
            &--text{
                ${tw`xl:text-[40px] text-[26px] font-medium text-center text-gray-200`}
                span.mask{
                    ${tw`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500`}
                }
            }
        }
        div.encryption-context {
            ${tw` flex flex-col items-center justify-center  absolute z-[20] w-auto h-auto`}
            &--image{
                ${tw`flex flex-col items-center  cursor-pointer w-auto h-auto`}
                img.lock-top{
                    ${tw` w-[50px] translate-y-5 transition-all duration-200 `}
                }
                img.lock-main{
                    ${tw` z-10`}
                }
            }
            div.Welcome-box{
                ${tw` px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]`}
                h1.Welcome-text{
                    ${tw`text-[12px]`}
                }
            }
        }
        div.encryption-subtitle{
            ${tw` absolute z-[20] bottom-[10px] px-[5px]`}
            &--text{
                ${tw`xl:text-[20px] text-[18px] font-medium text-center text-gray-300`}
            }
        }
        div.encryption-bg{
            ${tw` xl:scale-[1.25] lg:scale-[1.5] md:scale-[1.5] scale-[3.5]  flex items-start justify-center absolute`}
            video{
                ${tw`w-full h-auto aspect-video`}
            }
        }
    `
])

export { EncryptionWrapper }