import Edition from '../model/Edition';
import IEdition from '../model/IEdition';

class EditionsService {

    async update(id: number, edition: IEdition): Promise<IEdition> {
        edition.id = undefined;
        let currentEdition = await Edition.findByPk(id);
        return await currentEdition.update(edition);
    }

    create(editionData): Promise<IEdition> {
        editionData.id = undefined;
        return Edition.create(editionData);
    }

    async delete(id: number) {
        let currentEdition = await Edition.findByPk(id);
        return currentEdition.destroy();
    }
}

const editionsService = new EditionsService();
export default editionsService;
