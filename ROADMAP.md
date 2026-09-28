# Rocket SDK roadmap

The published Rocket 3.0.0 SDKs identify Rocket `master` commit
`1f6ba76f16f3246095d5d573c28d825d8b9367e3` as their source. That
source contains the Rocket 3.5 game APIs described below. The compiler still
reports version 3.0.0; this is not a separately versioned 3.5 release.

| Milestone | State in the referenced Rocket source |
| --- | --- |
| Native game runtime foundation | Integrated. |
| Textures, canvases, and display | Integrated. |
| Blending, shaders, and post-processing | Integrated. |
| Audio and streamed music | Integrated. |
| Managed game assets | `rocket.assets` integrated. |
| Rendered game UI | `rocket.ui.render` integrated. |
| Scroll2Roll readiness | Local Windows Debug and Release suites passed 307/307 each. Cross-platform workflow artifacts remain the final evidence gate. |

The [source implementation roadmap](https://github.com/RyanEid06/Rocket/blob/master/docs/ROCKET_3_5_ROADMAP_IMPLEMENTATION.md), [public API inventory](https://github.com/RyanEid06/Rocket/blob/master/docs/ROCKET_3_5_API_INVENTORY.md), and [readiness evidence](https://github.com/RyanEid06/Rocket/blob/master/docs/ROCKET_3_5_WP7_EVIDENCE.md) contain the detailed records. Historical document filenames retain their original work-packet IDs; this public roadmap uses descriptive feature names.

## Next distribution steps

1. Complete the remaining cross-platform readiness evidence.
2. Verify each future SDK package's relocation, checksums, and source commit before publishing it.
3. Update the website's download manifest and displayed version only when a new verified release is available.
