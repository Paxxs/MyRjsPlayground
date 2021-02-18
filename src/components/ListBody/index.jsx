import { Link, Persona, PersonaInitialsColor, PersonaSize, ScrollablePane, Shimmer, ShimmerElementsGroup, ShimmerElementType, Stack } from '@fluentui/react'
import React, { Component } from 'react'

const githubPersionaProps = {
    initialsColor: PersonaInitialsColor.green,
    showInitialsUntilImageLoads: true,
    imageInitials: "SB",
    size: PersonaSize.size100,
    styles: {
        root: {
            width: 300,
            margin: 5,
        }
    }
}

export default class ListBody extends Component {
    render() {
        return (
            <Stack style={{
                height: '60vh',
                position: 'relative',
                maxHeight: 'inherit',
            }}>
                <ScrollablePane style={{
                    // maxWidth: '100vh'
                }}>
                    <Stack horizontal wrap style={{
                        // padding: '20',
                        padding: '20px 40px 5px 40px',
                    }}>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.github.com">
                            <Persona
                                {...githubPersionaProps}
                                text="name"
                                imageUrl="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
                            />
                        </Link>
                    </Stack>

                </ScrollablePane>
            </Stack>
        )
    }
}
