import getConnection from "../db/connection"

export class IngressModel {

  async savePerson(data: any): Promise<any> {
    const db = await getConnection()
    return new Promise((resolve: any, reject: any) => {
      db('person')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'cid'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    })
  }

  async saveOpd(data: any): Promise<any> {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('opd')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'date_serv', 'seq'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveChronic(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('chronic')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'chronic'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveOpdx(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('opdx')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'seq', 'diag'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveOpop(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('opop')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'seq', 'oper'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveIpd(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('ipd')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'an'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveIpdx(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('ipdx')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'an', 'diag'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveIpop(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('ipop')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'an', 'oper'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveOpDrug(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('opdrug')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'seq', 'did'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveIpDrug(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('ipdrug')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'an', 'did'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  // TODO: Only for OPD
  async saveLab(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('lab')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'seq', 'labtest'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });

  }

  async saveAppoint(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('appoint')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'appoint_date', 'clinic'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveDrugallergy(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('drugallergy')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'dname'])
        .merge()
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

}