import getConnection from "../db/connection"

export class IngressModel {

  async savePerson(data: any): Promise<any> {
    const db = await getConnection()
    return new Promise((resolve: any, reject: any) => {
      try {
        db('person')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'cid'])
          .merge().then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    })
  }

  async saveOpd(data: any): Promise<any> {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('opd')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'date_serv', 'seq'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async saveChronic(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('chronic')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'chronic'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async saveOpdx(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('opdx')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'seq', 'diag'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async saveOpop(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('opop')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'seq', 'oper'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async saveIpd(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('ipd')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'an'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async saveIpdx(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('ipdx')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'an', 'diag'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async saveIpop(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('ipop')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'an', 'oper'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async saveOpDrug(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('opdrug')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'seq', 'did'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async saveIpDrug(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('ipdrug')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'an', 'did'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  // TODO: Only for OPD
  async saveLab(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('lab')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'seq', 'labtest'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });

  }

  async saveAppoint(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('appoint')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'appoint_date', 'clinic'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async saveDrugallergy(data: any) {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      try {
        db('drugallergy')
          .insert(data)
          .onConflict(['hospcode', 'hn', 'dname'])
          .merge()
          .then(() => resolve())
          .finally(async () => {
            await db.destroy();
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

}