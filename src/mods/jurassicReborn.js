export class JurassicRebornMod {
    constructor(world, mobSystem, effectSystem) {
        this.world = world;
        this.mobSystem = mobSystem;
        this.effectSystem = effectSystem;
        this.packLeader = null;
    }

    // Comportamiento de cazadores en manada (tipo Velociraptor)
    updatePackBehavior(dinos) {
        const raptors = dinos.filter(d => d.type === 'velociraptor' || d.type === 'raptor');
        if (raptors.length === 0) return;

        if (!this.packLeader || !raptors.includes(this.packLeader)) {
            this.packLeader = raptors[0];
        }

        raptors.forEach(raptor => {
            if (raptor !== this.packLeader) {
                const dx = this.packLeader.x - raptor.x;
                const dz = this.packLeader.z - raptor.z;
                const dist = Math.sqrt(dx * dx + dz * dz);
                if (dist > 3 && dist < 15) {
                    raptor.vx += (dx / dist) * 0.02;
                    raptor.vz += (dz / dist) * 0.02;
                }
            }
        });
    }

    // Rugido de T-Rex con temblor de pantalla y ahuyento de presas
    triggerTrexRoar(dino, player) {
        if (!dino || dino.type !== 'trex') return;

        const dx = player.x - dino.x;
        const dz = player.z - dino.z;
        const distance = Math.sqrt(dx * dx + dz * dz);

        if (distance < 20) {
            if (this.effectSystem && typeof this.effectSystem.addScreenShake === 'function') {
                this.effectSystem.addScreenShake(0.6);
            }
            if (this.mobSystem && typeof this.mobSystem.getNearbyMobs === 'function') {
                this.mobSystem.getNearbyMobs(dino.x, dino.z, 15).forEach(m => {
                    if (m.type !== 'trex') {
                        m.isFleeing = true;
                        m.fleeTimer = 100;
                    }
                });
            }
        }
    }
}
