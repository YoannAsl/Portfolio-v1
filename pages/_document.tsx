import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						href='/fonts/Apercu/Apercu-Regular.ttf'
						rel='stylesheet'
					/>
					<link
						href='/fonts/Apercu/Apercu-Medium.ttf'
						rel='stylesheet'
					/>
					<link
						href='/fonts/Apercu/Apercu-Bold.ttf'
						rel='stylesheet'
					/>
					<link
						href='/fonts/Apercu/Apercu-Light.ttf'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
