# PDF Edit

## How to run locally
	
	git clone

	yarn install

Make sure you have ***imagemagick***
Make sure you have ***ghostscript*** because *imagemagick* depends on it

	brew install ghostscript

Run the express server and frontend
	
	yarn devexpress

Go to [localhost:3000](http://www.localhost:3000) to see the app!

## How to do a Prod Deploy (manually)

Make sure you have heroku CLI. Go to [here](https://devcenter.heroku.com/articles/heroku-cli)

Make sure I've put you on the PDFEdit heroku team.

Logged into Heroku CLIL
	
	heroku login

Make sure you're logged into Docker locally and you ***MUST*** user your DockerID not your email. See [this](https://github.com/docker/hub-feedback/issues/935)

Log into the container registry:

	heroku container:login

Helpful short video, on Heroku CLI (here)[https://www.youtube.com/watch?v=tTwGdUTR5h8&lc=z23cwt34bpzwy5bhs04t1aokg3qi2rg4ftmujv4feu13bk0h00410]

Make sure ***production.env.js*** exists in ***pdfEdit/config/*** with the right *Stripe keys*.

Go to the root of pdfEdit where the ***Dockerfile*** is
	
	heroku container:push web --app pdfedit

This will push the new docker image to the registry.

Then release the image to the container to make it live!

	heroku container:release web --app pdfedit

To to https://www.pdfed.it and see the new changes (in like a hot minute)!
