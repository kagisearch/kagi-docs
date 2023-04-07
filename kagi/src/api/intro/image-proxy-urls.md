# Image Proxy URLs

Some API results will contain links to images using our proxy infrastructure,
for protecting user privacy from the source image's webserver.

It will be noted in the object documentation if the URL will be proxied or
not.

They will be returned as a bare path like:

```
/proxy/filename.jpg?c=CRYPTOGRAPHIC_HASH
```

The base URL for these endpoints is currently `https://kagi.com`.

<details>
<summary>Example of an object with a proxied image URL</summary>

```json
{
  "t": 0,
  "rank": 1,
  "url": "https://en.wikipedia.org/wiki/Steve_Jobs",
  "snippet": "<b>Steve Jobs</b>. Steven Paul <b>Jobs</b> (February 24, 1955 – October 5, 2011) was an American entrepreneur, industrial designer, business magnate, media proprietor, and investor. He was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company &#39;s board of directors following its ...",
  "thumbnail": {
    "height": "221",
    "width": "228",
    "url": "/proxy/images?c=_m3km2RjA3G0qleowsZXHRMgCYcGVIjA7CgQQtAXfhx2Y8mqTara_FXG1c46a9J6Xp9oZ2IxSBxy_beEmrSLj4YUjAKmanSbb4lqycEHpkZqGAK5Udutm8TGUixnO0whYae6-m-GHN9PlMBlr34zJFR3-sl61vg6CERMa0xPqfg%3D"
  }
}
```

</details>
