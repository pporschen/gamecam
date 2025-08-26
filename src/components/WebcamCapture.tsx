import { useState, useRef } from "react";
import { Box, Button } from "@mui/material";
import BigButton from "./Buttons/BigButton";

const WebcamCapture = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
	const [capturedImage, setCapturedImage] = useState<string | null>(null);

	const startWebcam = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true,
			});
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
			}
			setMediaStream(stream);
		} catch (error) {
			console.error("Error accessing webcam", error);
		}
	};

	const stopWebcam = () => {
		if (mediaStream) {
			mediaStream.getTracks().forEach((track) => {
				track.stop();
			});
			setMediaStream(null);
		}
	};

	const captureImage = () => {
		if (videoRef.current && canvasRef.current) {
			const video = videoRef.current;
			const canvas = canvasRef.current;
			const context = canvas.getContext("2d");

			if (context && video.videoWidth && video.videoHeight) {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;

				context.drawImage(video, 0, 0, canvas.width, canvas.height);

				const imageDataUrl = canvas.toDataURL("image/jpeg");
				setCapturedImage(imageDataUrl);
				stopWebcam();
			}
		}
	};

	const resetState = () => {
		stopWebcam();
		setCapturedImage(null);
	};

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#000",
			}}
		>
			{capturedImage ? (
				<>
					<Box component="img" src={capturedImage} alt="Captured" sx={{ width: "100%", borderRadius: 2 }} />
					<Button variant="contained" color="primary" onClick={resetState} sx={{ position: "absolute", bottom: 20 }}>
						Reset
					</Button>
				</>
			) : (
				<>
					<Box
						component="video"
						ref={videoRef}
						autoPlay
						muted
						sx={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							borderRadius: 2,
						}}
					/>
					<canvas ref={canvasRef} style={{ display: "none" }} />
					<BigButton
						onClick={mediaStream ? resetState : startWebcam}
						label={mediaStream ? "Stop Webcam" : "Start Webcam"}
						style={{
							position: "absolute",
							bottom: 20,
							left: "50%",
							transform: "translateX(-50%)",
						}}
					/>
				</>
			)}
		</Box>
	);
};

export default WebcamCapture;
