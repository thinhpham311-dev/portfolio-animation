import tw, { styled, css } from 'twin.macro'

const FooterWrapper = styled.footer(() => [
    tw`w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]`,
    css`
        div.footer-inner {
            ${tw`w-full flex flex-col items-center justify-center m-auto`}
            &--grid{
                ${tw`w-full h-full flex flex-row items-center justify-around flex-wrap`}
                &-col{
                    ${tw` min-w-[200px] h-auto flex flex-col items-center justify-start`}
                }
            }
        }
        div.footer-title{
            ${tw`font-bold text-[16px]`}
        }
        p.footer-item{
            ${tw` flex flex-row items-center my-[15px] cursor-pointer`}
            &--text{
                ${tw`text-[15px] ml-[6px]`}
            }
        }
        div.footer-license{
            ${tw`mb-[20px] text-[15px] text-center`}
        }
    `
])

export {
    FooterWrapper
}