# Three.js Camera Positioning from Screen-Space Targets

Documents the math behind deriving camera world-space position from a desired screen-space position.

---

## Key Terms

**World space** — the 3D coordinate system of the scene. Object positions, camera positions, and distances are all measured here in arbitrary units.

**Screen space** — the 2D coordinate system of the rendered image. Usually measured in pixels, or as a 0–1 fraction of the viewport dimensions.

**NDC (Normalized Device Coordinates)** — a device-independent version of screen space, where both axes run from `-1` to `+1` regardless of resolution. The standard coordinate system used in projection math. See the section below.

**Frustum** — the pyramid-shaped volume that a perspective camera can see. Everything inside gets rendered; everything outside gets clipped.

**FOV (Field of View)** — the angle of the camera's cone of vision. Three.js cameras are defined by a vertical FOV; the horizontal FOV is derived from it using the aspect ratio.

**Aspect ratio** — the ratio of viewport width to height (`width / height`). Determines how wide the horizontal FOV is relative to the vertical.

---

## NDC (Normalized Device Coordinates)

NDC maps the screen to the range `[-1, 1]` on both axes:

- `x = -1` → left edge, `x = +1` → right edge
- `y = -1` → bottom edge, `y = +1` → top edge

Converting from a screen fraction `(0–1)` to NDC:

```ts
ndcX = 2 * fractionX - 1
ndcY = 1 - 2 * fractionY     // Y is flipped: fraction 0 = top = NDC +1
```

NDC is used because the standard projection equations are defined in these terms. It's the natural coordinate system for "where on the screen is this point" — device-independent by definition.

---

## The Projection Triangle

A perspective camera sees the world through a frustum. The diagram below is a top-down view, with the camera looking forward (up the page), ignoring Y:

```text
  NDC x = -1          NDC x = +1
       |                   |
       |←── full width ───→|   ← screen plane at depth d
        \                 /
         \               /
          \   fovH / 2  /
           \     |     /
            \    |    /
             \   |   /
              \  |  /
               \ | /
                \|/
              Camera
                |
           Z axis (forward)
```

At distance `d` in front of the camera, the right edge of the screen (NDC x = +1) sits at a horizontal offset of:

```text
half_screen_width_at_d = d * tan(fovH / 2)
```

This is just trigonometry: `tan(angle) = opposite / adjacent`, where `adjacent = d` and `angle = fovH / 2`.

The full visible width at depth `d` is `2 * d * tan(fovH / 2)`.

`d` is the scaling factor that converts NDC fractions into world units. A larger `d` (camera further back) means the same FOV covers more world space.

---

## fovH vs fovV and Aspect Ratio

Three.js `PerspectiveCamera` is defined by a **vertical** FOV only. The horizontal FOV is derived from the aspect ratio at render time:

```ts
fovH = 2 * atan(tan(fovV / 2) * aspect)     // where aspect = width / height
```

A wider screen has a larger `fovH` even though `fovV` stays constant. A square screen would have `fovH === fovV`.

The camera X calculation uses `fovH` and the Y calculation uses `fovV`. Using `fovV` for both would assume a square screen, placing the cube at the wrong horizontal position on 16:9 (or any non-square) viewports.

---

## Deriving Camera Position

Given:

- A 3D point (the cube) at world position `P = (px, py, pz)` — simplest to place at `(0, 0, 0)`
- A desired screen-space position `(ndcX, ndcY)`
- A chosen camera distance `d` from the cube along Z

The projection relationship (from the triangle above) is:

```text
ndcX = (px - cx) / (d * tan(fovH / 2))
ndcY = (py - cy) / (d * tan(fovV / 2))
```

Rearranging to solve for camera position:

```text
camera_x = px - ndcX * d * tan(fovH / 2)
camera_y = py - ndcY * d * tan(fovV / 2)
camera_z = pz + d
```

With the cube at the origin this simplifies to:

```text
camera_x = -ndcX * d * tan(fovH / 2)
camera_y = -ndcY * d * tan(fovV / 2)
camera_z = d
```

In plain English: the camera needs to stand far enough to the left of the cube that the cube appears `ndcX` of the way across the screen. `d * tan(fovH / 2)` is one screen-half-width in world units, so `ndcX * d * tan(fovH / 2)` is how far right of the camera the cube sits. Subtract that from the cube's position and you get the camera.

---

## Config Values

**Design values (start position):** Where the cube first appears is a creative decision — there is no DOM element to derive it from. It is defined as a screen fraction, e.g. `{ x: 0.72, y: 0.38 }`, meaning "72% across, 38% down" on every resolution. Screen fractions are resolution-independent by definition.

**Layout values (end position):** The cube lands in `#me`'s hands. The end screen fraction is computed from `getBoundingClientRect()` at runtime, so it is always accurate regardless of screen size or layout shift.

**Distance values (`d_start`, `d_end`):** Control the apparent size of the cube at each end of the animation. A larger `d` means the camera is further back, making the cube appear smaller.
