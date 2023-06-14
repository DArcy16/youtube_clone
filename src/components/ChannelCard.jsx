/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail , marginTop}) => {
	return (
		<Box
			sx={{
				boxShadow: "none",
				borderRadius: "20px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: { xs: "356px", md: "320px" },
				height: "326px",
				margin: "auto",
				marginTop: marginTop
			}}
		>
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						color: "#fff",
					}}
				>
					<CardMedia
						image={
							channelDetail?.snippet?.thumbnails?.high?.url ||
							demoProfilePicture
						}
						alt={channelDetail?.snippet?.title}
						sx={{
							borderRadius: "50%",
							height: "150px",
							width: "150px",
							mb: 2,
							border: "1px solid #e3e3e3",
						}}
					/>
					<Typography variant="h6" sx={{ color: "gray" }}>
						{channelDetail?.snippet?.title}
						<CheckCircle sx={{ fontSize: 14, color: "gray", ml: 2 }} />
					</Typography>

					{channelDetail?.statistics?.subscriberCount && (
						<Typography>
							{parseInt(
								channelDetail?.statistics?.subscriberCount
							).toLocaleString()}{" "}
							Subscribers
						</Typography>
					)}
				</CardContent>
			</Link>
		</Box>
	);
};

export default ChannelCard;
