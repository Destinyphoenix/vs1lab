{
  description = "VS1 Lab Entwicklungsumgebung";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { nixpkgs, ... }:
    {
      devShells = nixpkgs.lib.genAttrs nixpkgs.lib.systems.flakeExposed (system: {
        default = nixpkgs.legacyPackages.${system}.mkShellNoCC {
          # Node 22 wie im Devcontainer; enthält npm
          packages = [ nixpkgs.legacyPackages.${system}.nodejs_22 ];
        };
      });
    };
}
