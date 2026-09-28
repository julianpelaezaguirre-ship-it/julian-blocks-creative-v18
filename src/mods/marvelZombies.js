export class MarvelZombiesMod {
    constructor(player, mobSystem, effectSystem) {
        this.player = player;
        this.mobSystem = mobSystem;
        this.effectSystem = effectSystem;
        this.infectionLevel = 0; // Escala de 0 a 100
    }

    // Infección y conversión de héroes
    infectHero(heroEntity) {
        if (heroEntity.isZombie) return;

        heroEntity.isZombie = true;
        heroEntity.textureKey = `${heroEntity.type}_zombie`;
        heroEntity.health = heroEntity.maxHealth * 1.5;
        heroEntity.damage *= 1.3;
        heroEntity.speed *= 0.8;

        if (this.effectSystem && typeof this.effectSystem.spawnInfectionParticles === 'function') {
            this.effectSystem.spawnInfectionParticles(heroEntity.x, heroEntity.y, heroEntity.z);
        }
    }

    // Progresión de infección en el jugador
    applyPlayerInfection(amount) {
        this.infectionLevel = Math.min(100, this.infectionLevel + amount);
        if (this.infectionLevel >= 100) {
            this.triggerPlayerZombieState();
        }
    }

    triggerPlayerZombieState() {
        if (!this.player) return;
        this.player.isZombie = true;
        this.player.speed *= 1.2;
        this.player.attackPower *= 1.5;
    }
}
