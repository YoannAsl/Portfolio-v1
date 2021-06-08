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
						href='/fonts/Montserrat/Montserrat-Regular.ttf'
						rel='stylesheet'
					/>
					<link
						href='/fonts/Montserrat/Montserrat-Medium.ttf'
						rel='stylesheet'
					/>
					<link
						href='/fonts/Montserrat/Montserrat-Bold.ttf'
						rel='stylesheet'
					/>
					<link
						href='/fonts/Montserrat/Montserrat-SemiBold.ttf'
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
