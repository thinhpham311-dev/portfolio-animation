import tw, { styled, css } from 'twin.macro'

const EncryptionWrapper = styled.section(() => [
    tw`flex flex-row relative items-center justify-center min-h-screen w-full h-full`,
    css`
        div.encryption-title{
            ${tw` absolute w-auto h-auto top-0 z-[5]`}
            &--text{
                ${tw`text-[40px] font-medium text-center text-gray-200`}
                span.mask{
                    ${tw`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500`}
                }
            }
        }
        div.encryption-context {
            ${tw` flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto`}
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
                ${tw`text-[20px] font-medium text-center text-gray-300`}
            }
        }
        div.encryption-bg{
            ${tw`w-full flex items-start justify-center absolute`}
            video{
                ${tw`w-full h-auto`}
            }
        }
    `
])

export { EncryptionWrapper }