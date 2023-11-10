import tw, { styled, css } from 'twin.macro'

const ProjectsWrapper = styled.section(() => [
    tw`flex flex-col items-center justify-center py-20`,
    css`
        h1.projects-title{
            ${tw`text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20`}
        }
        div.projects-list{
            ${tw` h-full w-full flex flex-col md:flex-row gap-10 px-10`}
            .card{
                ${tw`relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]`}
                &--image{
                    ${tw`w-full object-contain`}
                }
                &--text{
                    ${tw` relative p-4`}
                    &-title{
                        ${tw` text-2xl font-semibold text-white`}
                    }
                    &-description{
                        ${tw` mt-2 text-gray-300`}
                    }
                }
            }
        }
    `
])

export { ProjectsWrapper }