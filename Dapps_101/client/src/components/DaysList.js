import React from "react";
import * as Build from '../ressources/Buidl.png';
import * as Metamask from '../ressources/metamask.jpeg';
import {Card, CardContent, CardDescription, CardHeader, Grid, Image} from 'semantic-ui-react';
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
        description: "",
        illustration: ""
    }

    const day4 = {
        label: "Day 4",
        description: "",
        illustration: ""
    }

    const day5 = {
        label: "Day 5",
        description: "",
        illustration: ""
    }

    const daysList = [day0, day1, day2, day4];

    return (
        <Grid className="DaysList" stackable centered columns={2}>

            {daysList.map((day, key) => {
                return (
                    <Grid.Column key={key}>

                        <Card>
                            <CardHeader textAlign="center">{day.label}</CardHeader>
                            <CardContent>
                                <Image src = {day.illustration}/>
                            </CardContent>
                            <CardDescription textAlign="center">{day.description}</CardDescription>

                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    )
}

export default DaysList;