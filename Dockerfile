FROM rust:latest

RUN cargo install mdbook

# We don't `COPY` the data into the image, because both for `build` and `serve`
# it's useful to mount the data from the host at runtime.

# We don't predefine a `WORKDIR` for flexibility to use the kagi or orion Knowledgebase Maps.

VOLUME /kagi-docs

EXPOSE 3000

ENTRYPOINT ["mdbook"]

# This serves on 0.0.0.0:3000 by default, suitable for running in a standard Docker network.
# This way the server is reachable from the host via `localhost:3000` when you start the container with `docker run -p 127.0.0.1:3000:3000 ...`.
#
# Alternatively, when you want to run the container in the host network, you might not want to expose the server to other hosts.
# Then you run with `docker run ... --network host <image> serve -n localhost`.
CMD ["serve", "-n", "0.0.0.0"]
