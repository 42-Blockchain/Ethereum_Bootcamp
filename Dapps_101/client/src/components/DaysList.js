import React from "react";
import * as Build from '../ressources/Buidl.png';
import * as Metamask from '../ressources/metamask.jpeg';
import {Card, Label, CardDescription, CardHeader, Grid, Image} from 'semantic-ui-react';
import * as ThinkingBlockchain from '../ressources/Thinking_blockchain.png';

const DaysList = () => {
    const day0 = {
        label: "Day 0",
        description: "Blockchain Concepts",
        illustration: ThinkingBlockchain
    }
    const day1 = {
        label: "Day 1",
        description: "Interacting with the Ethereum blockchain",
        illustration: Metamask
    }
    const day2 = {
        label: "Day 2",
        description: "Buidl",
        illustration: Build
    }
    
    const day3 = {
        label: "Day 3",
        description: "Solidity 101",
        illustration: Build
    }

    const day4 = {
        label: "Day 4",
        description: "Advanced solidity",
        illustration: Build
    }

    const day5 = {
        label: "Day 5",
        description: "Custom Token",
        illustration: Build
    }

    const daysList = [day0, day1, day2, day3, day4, day5];

    return (
        <Grid className="DaysList" stackable centered columns={3}>

            {daysList.map((day, key) => {
                return (
                    <Grid.Column key={key}>

                        <Card>
                            <Label>
                                <CardHeader textAlign="center">
                                        {day.label}
                                </CardHeader>
                            </Label>
                                <Image
                                    src = {day.illustration}
                                />
                            <Label>
                                <CardDescription textAlign="center">
                                    {day.description}
                                </CardDescription>
                            </Label>

                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    )
}

export default DaysList;