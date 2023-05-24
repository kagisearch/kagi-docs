# Kagi Inc. Documentation

This repository contains open-source documentation for products made by Kagi Inc.

## Contents

- [Knowledgebase Map](#knowledgebase-map)
- [Support](#support)
  - [Discussions](#discussions)
  - [Community](#community)
- [Contributing](#contributing)
  - [Issues](#issues)
  - [Pull Requests](#pull-requests)
  - [Creating a Pull Request](#creating-a-pull-request)
- [Building](#building)

## Knowledgebase Map

This repo serves documentation for multiple products developed by Kagi.

Product | Documentation         | Repo Directory
--------|-----------------------|----------------
[Kagi Search](https://kagi.com) | https://help.kagi.com/kagi | [kagi](https://github.com/kagisearch/kagi-docs/tree/main/kagi)
[Orion Browser](https://browser.kagi.com) | https://help.kagi.com/orion | [orion](https://github.com/kagisearch/kagi-docs/tree/main/orion)

Our documentation efforts are ongoing! We welcome your feedback and 
contributions - read on for details!

## Support

### Discussions

On our [discussions](https://github.com/kagisearch/kagi-docs/discussions) page,
you will find several categories:

- **Announcements**, where we will post important updates related to the
  documentation in this repo.

- **Q&A**, where you can discuss and ask questions about the documentation
  and APIs that we offer. This is the best place to start if you're not sure
  of a better place!

For topics outside of the documentation & APIs, please refer to that product's
official support venues, in the [Community](#community) section.

### Community

Each of our products has their own budding community. You can join us for
wider discussion and product support at their dedicated venues:

Product | Feedback & Bug Reports | Discord
--------|------------------------|------------
Kagi Search | [kagifeedback.org](https://kagifeedback.org) | [Invite Link](https://kagi.com/discord)
Orion Browser | [orionfeedback.org](https://orionfeedback.org) | [Invite Link](https://discord.gg/EMMzT57hQT)

## Contributing

### Issues

We welcome any bug reports, requests for clarification, or other inquiries
via the [Issues](https://github.com/kagisearch/kagi-docs/issues) tab.

Upon opening an issue, you will be presented with a list of templates to
choose from that will help you provide us with the information we need,
and triage the issue with the correct labels.

A staff member will review your issue, and help investigate what the best
course of action is.

### Pull Requests

Thank you for taking the time to contribute!

We welcome contributions such as:

- Fixes to incorrect statements or inaccuracies within the documentation.
- Extending documentation with details, or clarifying complicated explanations
  with easier to understand wording.
- Additions that fill gaps or missing pieces in the current documentation.
- Fixing of spelling and grammatical errors in the documentation.
- Adding new documentation when staff calls on the community to prepare new
  sections.

We would ask that you withhold:

- Whitespace or formatting changes.
- Subjective wording changes.
- Modifications to the overall structure and format of the documentation.
- Additions needlessly restructure current documentation.
- Additions that document unreleased product functionality.

If you are not sure, please feel free to [open an issue](https://github.com/kagisearch/kagi-docs/issues/new/choose)
first, and we will help guide you along!

### Creating a Pull Request

1. [Create a fork](https://github.com/kagisearch/kagi-docs/fork) of this repo
2. Create a branch: `git checkout -b username/my-cool-change`
3. Follow the [Building](#building) instructions to compile the book you would
   like to change
4. Make your changes - ensure everything looks good when compiled with mdBook!
5. Commit your changes: `git -am 'Update documentation'`
6. Push the branch to your fork: `git push origin username/my-cool-change`
7. Create a new Pull Request

A template in the pull request form will guide you in providing any additional
details we need to help accept your changes.

## Building

All documentation is written to be hosted with the open-source
[mdBook](https://rust-lang.github.io/mdBook/) documentation utility.

Each directory in the [Knowledgebase Map](#knowledgebase-map) is built as its
own book, configured for that products own criteria, look, and feel.

To get started:

1. Install [mdBook](https://rust-lang.github.io/mdBook/guide/installation.html)
2. Navigate to the book you wish to build in the [Knowledgebase Map](#knowledgebase-map)
3. Run `mdbook build` in that directory to compile the book to a `book/`
   directory with the rendered contents. You can open `book/index.html` to start browsing.

You can also run `mdbook serve` and open [http://localhost:3000](http://localhost:3000)
to view the documentation in your browser. mdBook will watch your files and automatically
rebuild & refresh the page when the book's files are updated.

See each book's `book.toml` for configuration options we have applied.

### With Docker

If you don't have and don't want to install Rust on your local machine, you can use Docker instead. The command examples assume you're in the root of the Git repository.

1. Build the image `docker build -t kagi-docs .`
2. Run the container to build or serve:
   - Build example: `docker run --rm -v /path/to/kagi-docs:/kagi-docs --workdir /kagi-docs/kagi kagi-docs build`.
   - Serve example: `docker run -it --rm -v /path/to/kagi-docs:/kagi-docs --workdir /kagi-docs/kagi -p 127.0.0.1:3000:3000 kagi-docs`.
     - If mdBooks doesn't stop on Ctrl+C, you can detach with Ctrl+P Ctrl+Q and then run `docker stop <container_name>`
