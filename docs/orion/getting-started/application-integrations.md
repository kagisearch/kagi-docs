# Integrating Orion with Other Applications

Orion can be integrated with other applications, such as launchers.

## Raycast

[Raycast](https://raycast.com/) is a collection of powerful productivity tools, built as an extendable Spotlight-like launcher. 

By default, Raycast cannot open specific Orion profiles, as Orion creates a new app for each profile (eg. "Orion - Work.app"), contained within its own folder in `~/Applications/Orion/Orion Profiles/`. To make these profile-apps accessible from the Raycast launcher,
1. Open Raycast settings
2. Select the **Applications** extension group, under the **Extensions** tab
3. Click on **Add Directories** in the sidebar on the right
4. Add all the *subdirectories* of `~/Applications/Orion/Orion Profiles/` (adding `Orion Profiles` itself does nothing)

These instructions should generally work for similar launcher apps, if they have the capability to add directories in a similar manner.
